
CREATE TABLE user_data
(  
    U_Id int(10) unsigned NOT NULL AUTO_INCREMENT,
    userEmail VARCHAR(255) DEFAULT NULL, 
    userPassword varchar(255) DEFAULT NULL,
    paymentType varchar(255) DEFAULT NULL,
    primary key (U_Id),
    UNIQUE KEY `userEmail` (`userEmail`)
);