<?php

namespace Database\Migrations;

use Doctrine\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema as Schema;

class Version20210222053546 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema): void
    {
        $connection = 'mysql';
        //$connection = getenv('APP_ENV') === 'local' ? 'mysql' : 'testing';

        app('db')->connection($connection)->statement('CREATE TABLE categories (id INT AUTO_INCREMENT NOT NULL, parent_id INT NOT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_3AF34668727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        app('db')->connection($connection)->statement('CREATE TABLE courses (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(350) NOT NULL, author_id INT NOT NULL, deleted_at INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        app('db')->connection($connection)->statement('CREATE TABLE categories_courses (course_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_81AF8BEC591CC992 (course_id), INDEX IDX_81AF8BEC12469DE2 (category_id), PRIMARY KEY(course_id, category_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        app('db')->connection($connection)->statement('ALTER TABLE categories ADD CONSTRAINT FK_3AF34668727ACA70 FOREIGN KEY (parent_id) REFERENCES categories (id)');
        app('db')->connection($connection)->statement('ALTER TABLE categories_courses ADD CONSTRAINT FK_81AF8BEC591CC992 FOREIGN KEY (course_id) REFERENCES courses (id)');
        app('db')->connection($connection)->statement('ALTER TABLE categories_courses ADD CONSTRAINT FK_81AF8BEC12469DE2 FOREIGN KEY (category_id) REFERENCES categories (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema): void
    {
        //$connection = getenv('APP_ENV') === 'local' ? 'mysql' : 'testing';
        $connection = 'mysql';

        app('db')->connection($connection)->statement('ALTER TABLE categories DROP FOREIGN KEY FK_3AF34668727ACA70');
        app('db')->connection($connection)->statement('ALTER TABLE categories_courses DROP FOREIGN KEY FK_81AF8BEC12469DE2');
        app('db')->connection($connection)->statement('ALTER TABLE categories_courses DROP FOREIGN KEY FK_81AF8BEC591CC992');
        app('db')->connection($connection)->statement('DROP TABLE categories');
        app('db')->connection($connection)->statement('DROP TABLE courses');
        app('db')->connection($connection)->statement('DROP TABLE categories_courses');
    }
}
