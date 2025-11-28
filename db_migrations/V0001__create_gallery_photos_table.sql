CREATE TABLE IF NOT EXISTS t_p90508749_naruto_tour_project.gallery_photos (
    id SERIAL PRIMARY KEY,
    url TEXT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    display_order INTEGER DEFAULT 0
);

CREATE INDEX idx_gallery_photos_display_order ON t_p90508749_naruto_tour_project.gallery_photos(display_order DESC, created_at DESC);