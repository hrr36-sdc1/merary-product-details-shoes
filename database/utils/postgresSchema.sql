--lunchy start postgres
--psql postgres
-- \list
-- \connect postgres

CREATE TABLE shoes (
  id VARCHAR (1000) NOT NULL,
  name VARCHAR(1000) NOT NULL,
  img_url VARCHAR(1000),
  short_desc VARCHAR(1000),
  long_desc VARCHAR(1000),
  type VARCHAR (1000),
  price VARCHAR (1000),
  rating VARCHAR (1000),
  review_count VARCHAR (1000),
  details VARCHAR (1000)
);

-- \copy shoes(id, name, img_url, short_desc, long_desc, type, price, rating, review_count, details) from '/Users/blancamartinezcobian/Desktop/CODING/HR-remote/SDC/product-details/database/utils/shoeDataTest.csv' delimiter ',';


