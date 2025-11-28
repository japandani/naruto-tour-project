'''
Business: API для управления галереей фотографий с авторизацией админа
Args: event - dict с httpMethod, body, headers, queryStringParameters
      context - объект с атрибутами request_id, function_name
Returns: HTTP response dict
'''
import json
import os
import psycopg2
from typing import Dict, Any, Optional
from datetime import datetime
import hashlib

ADMIN_PASSWORD_HASH = "c3c24c5b46e3d1c4b5de4c8f7a9e6d2b5f8a1c3e7b4d9f2a6c8e1b5d4a7c9f3e2"

def verify_admin_token(headers: Dict[str, str]) -> bool:
    token = headers.get('X-Admin-Token', '')
    return hashlib.sha256(token.encode()).hexdigest() == ADMIN_PASSWORD_HASH

def get_db_connection():
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        raise Exception('DATABASE_URL not found')
    return psycopg2.connect(database_url)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    headers = event.get('headers', {})
    
    if method == 'GET':
        params = event.get('queryStringParameters', {})
        action = params.get('action', 'list')
        
        if action == 'verify':
            is_valid = verify_admin_token(headers)
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'valid': is_valid})
            }
        
        conn = get_db_connection()
        try:
            with conn.cursor() as cur:
                cur.execute('''
                    SELECT id, url, title, description, created_at, display_order
                    FROM t_p90508749_naruto_tour_project.gallery_photos
                    ORDER BY display_order DESC, created_at DESC
                ''')
                rows = cur.fetchall()
                
                photos = []
                for row in rows:
                    photos.append({
                        'id': row[0],
                        'url': row[1],
                        'title': row[2],
                        'description': row[3],
                        'created_at': row[4].isoformat() if row[4] else None,
                        'display_order': row[5]
                    })
                
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({'photos': photos})
                }
        finally:
            conn.close()
    
    if method == 'POST':
        if not verify_admin_token(headers):
            return {
                'statusCode': 401,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Unauthorized'})
            }
        
        body_data = json.loads(event.get('body', '{}'))
        url = body_data.get('url', '')
        title = body_data.get('title', '')
        description = body_data.get('description', '')
        
        if not url or not title:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'URL and title are required'})
            }
        
        conn = get_db_connection()
        try:
            with conn.cursor() as cur:
                cur.execute('''
                    SELECT COALESCE(MAX(display_order), 0) + 1
                    FROM t_p90508749_naruto_tour_project.gallery_photos
                ''')
                next_order = cur.fetchone()[0]
                
                cur.execute('''
                    INSERT INTO t_p90508749_naruto_tour_project.gallery_photos 
                    (url, title, description, display_order)
                    VALUES (%s, %s, %s, %s)
                    RETURNING id, url, title, description, created_at, display_order
                ''', (url, title, description, next_order))
                
                row = cur.fetchone()
                conn.commit()
                
                photo = {
                    'id': row[0],
                    'url': row[1],
                    'title': row[2],
                    'description': row[3],
                    'created_at': row[4].isoformat() if row[4] else None,
                    'display_order': row[5]
                }
                
                return {
                    'statusCode': 201,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({'photo': photo})
                }
        finally:
            conn.close()
    
    if method == 'DELETE':
        if not verify_admin_token(headers):
            return {
                'statusCode': 401,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Unauthorized'})
            }
        
        params = event.get('queryStringParameters', {})
        photo_id = params.get('id')
        
        if not photo_id:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Photo ID is required'})
            }
        
        conn = get_db_connection()
        try:
            with conn.cursor() as cur:
                cur.execute('''
                    DELETE FROM t_p90508749_naruto_tour_project.gallery_photos
                    WHERE id = %s
                ''', (photo_id,))
                conn.commit()
                
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({'success': True})
                }
        finally:
            conn.close()
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'error': 'Method not allowed'})
    }