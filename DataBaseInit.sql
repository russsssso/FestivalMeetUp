use FestivalMeetUp
GO

DROP TABLE Posts;
DROP TABLE Feeds;
DROP TABLE User_Reports;
DROP TABLE Event_Reports;
DROP TABLE User_Report_Types;
DROP TABLE Event_Report_Types;
DROP TABLE Participating_Users;
DROP TABLE Events;
DROP TABLE Addresses;
DROP TABLE Accounts;
DROP TABLE Users;

CREATE TABLE Users
(
	ID				BIGINT NOT NULL IDENTITY PRIMARY KEY,
	Display_Name	VARCHAR(50),
	Facebook		VARCHAR(300),
	Instagram		VARCHAR(300),
);

CREATE TABLE Accounts
(
	Username		VARCHAR(100) NOT NULL PRIMARY KEY,
	Password_Hash	VARBINARY(300) NOT NULL, 
	User_ID			BIGINT NOT NULL FOREIGN KEY REFERENCES Users(ID)
);

CREATE TABLE Addresses
(
	ID				BIGINT NOT NULL IDENTITY PRIMARY KEY,
	Country			VARCHAR(50),
	County			VARCHAR(50),
	City			VARCHAR(50),
	Street			VARCHAR(150),
	Number			INT,
	ZIP				VARCHAR(6)
);

CREATE TABLE Events
(
	ID				BIGINT NOT NULL IDENTITY PRIMARY KEY,
	Name			VARCHAR(100) NOT NULL,
	Creator_User	BIGINT NOT NULL FOREIGN KEY REFERENCES Users(ID),
	Event_Address	BIGINT NOT NULL FOREIGN KEY REFERENCES Addresses(ID),
	Starting_Date	DATETIME NOT NULL,
	Ending_Date		DATETIME NOT NULL
);

CREATE TABLE Participating_Users
(
	User_ID			BIGINT NOT NULL FOREIGN KEY REFERENCES Users(ID),
	Event_ID		BIGINT NOT NULL FOREIGN KEY REFERENCES Events(ID),
);

CREATE TABLE Event_Report_Types
(
	ID				BIGINT NOT NULL IDENTITY PRIMARY KEY,
	Name			VARCHAR(50)
);

CREATE TABLE Event_Reports
(
	ID				BIGINT NOT NULL IDENTITY PRIMARY KEY,
	Submitter		BIGINT NOT NULL FOREIGN KEY REFERENCES Users(ID),
	Target_Event	BIGINT NOT NULL FOREIGN KEY REFERENCES Events(ID),
	Report_Type		BIGINT NOT NULL FOREIGN KEY REFERENCES Event_Report_Types(ID),
	Details			VARCHAR(1000)
);

CREATE TABLE User_Report_Types
(
	ID				BIGINT NOT NULL IDENTITY PRIMARY KEY,
	Name			VARCHAR(50)
);

CREATE TABLE User_Reports
(
	ID				BIGINT NOT NULL IDENTITY PRIMARY KEY,
	Submitter		BIGINT NOT NULL FOREIGN KEY REFERENCES Users(ID),
	Target_User		BIGINT NOT NULL FOREIGN KEY REFERENCES Users(ID),
	Report_Type		BIGINT NOT NULL FOREIGN KEY REFERENCES User_Report_Types(ID),
	Details			VARCHAR(1000)
);

CREATE TABLE Feeds
(
	ID				BIGINT NOT NULL IDENTITY PRIMARY KEY,
	Event_ID		BIGINT NOT NULL FOREIGN KEY REFERENCES Events(ID),
);

CREATE TABLE Posts
(
	ID				BIGINT NOT NULL IDENTITY PRIMARY KEY,
	Feed_ID			BIGINT NOT NULL FOREIGN KEY REFERENCES Feeds(ID),
	User_ID			BIGINT NOT NULL FOREIGN KEY REFERENCES Users(ID),
	Post_Text		VARCHAR(500)
);

INSERT INTO Users(Display_Name, Facebook, Instagram)
	VALUES	('admin', NULL, NULL),
			('russsssso', NULL, NULL),
			('antonia', NULL, NULL),
			('predoi', NULL, NULL);

SELECT * FROM Users;

INSERT INTO Accounts(Username, Password_Hash, User_ID)
	VALUES	('admin',	HASHBYTES('SHA2_256', CONVERT(NVARCHAR(30), 'admin')),	1),
			('ruso',	HASHBYTES('SHA2_256', CONVERT(NVARCHAR(30), 'parola')), 2),
			('antonia',	HASHBYTES('SHA2_256', CONVERT(NVARCHAR(30), 'parola')), 3),
			('predoi',	HASHBYTES('SHA2_256', CONVERT(NVARCHAR(30), 'parola')), 4);

SELECT * FROM Accounts;

INSERT INTO Addresses(Country, County, City, Street, Number, ZIP)
	VALUES	('Romania', 'Bucuresti', 'Sector 6', 'Splaiul Independentei', 290, 600409),
			('Romania', 'Cluj', 'Cluj', 'Strada din Cluj', 1, 888888);

SELECT * FROM Addresses;

INSERT INTO Events(Name, Creator_User, Event_Address, Starting_Date, Ending_Date)
	VALUES	('Untold', 1, 2, '20240718 8:00:00 AM', '20240720 10:00:00 PM'),
			('Cafea in Regie', 2, 1, '20240701 8:00:00 AM', '20240701 10:00:00 AM');

INSERT INTO Participating_Users(User_ID, Event_ID)
	VALUES	(2, 1), (3, 1), (4, 1),
			(2, 2);

SELECT * FROM Participating_Users;

INSERT INTO Feeds(Event_ID)
	VALUES (1), (2);

INSERT INTO Posts(Feed_ID, Post_Text, User_ID)
	VALUES (2, 'Post entuziast despre cafea!', 2);

SELECT * FROM Posts;