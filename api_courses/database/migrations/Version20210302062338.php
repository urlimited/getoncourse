<?php

namespace Database\Migrations;

use Doctrine\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema as Schema;

class Version20210302062338 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema): void
    {
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE categories (id INT AUTO_INCREMENT NOT NULL, parent_id INT NOT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_3AF34668727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE courses (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(350) NOT NULL, author_id INT NOT NULL, deleted_at INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categories_courses (course_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_81AF8BEC591CC992 (course_id), INDEX IDX_81AF8BEC12469DE2 (category_id), PRIMARY KEY(course_id, category_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE edu_stuffs (id INT AUTO_INCREMENT NOT NULL, parent_id INT NOT NULL, lesson_id INT NOT NULL, content LONGTEXT NOT NULL, type INT NOT NULL, deleted_at INT DEFAULT NULL, INDEX IDX_8F1243BBCDF80196 (lesson_id), INDEX IDX_8F1243BB727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lessons (id INT AUTO_INCREMENT NOT NULL, course_id INT NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(350) NOT NULL, deleted_at INT DEFAULT NULL, INDEX IDX_3F4218D9591CC992 (course_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE categories ADD CONSTRAINT FK_3AF34668727ACA70 FOREIGN KEY (parent_id) REFERENCES categories (id)');
        $this->addSql('ALTER TABLE categories_courses ADD CONSTRAINT FK_81AF8BEC591CC992 FOREIGN KEY (course_id) REFERENCES courses (id)');
        $this->addSql('ALTER TABLE categories_courses ADD CONSTRAINT FK_81AF8BEC12469DE2 FOREIGN KEY (category_id) REFERENCES categories (id)');
        $this->addSql('ALTER TABLE edu_stuffs ADD CONSTRAINT FK_8F1243BBCDF80196 FOREIGN KEY (lesson_id) REFERENCES lessons (id)');
        $this->addSql('ALTER TABLE edu_stuffs ADD CONSTRAINT FK_8F1243BB727ACA70 FOREIGN KEY (parent_id) REFERENCES edu_stuffs (id)');
        $this->addSql('ALTER TABLE lessons ADD CONSTRAINT FK_3F4218D9591CC992 FOREIGN KEY (course_id) REFERENCES courses (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema): void
    {
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE categories DROP FOREIGN KEY FK_3AF34668727ACA70');
        $this->addSql('ALTER TABLE categories_courses DROP FOREIGN KEY FK_81AF8BEC12469DE2');
        $this->addSql('ALTER TABLE categories_courses DROP FOREIGN KEY FK_81AF8BEC591CC992');
        $this->addSql('ALTER TABLE lessons DROP FOREIGN KEY FK_3F4218D9591CC992');
        $this->addSql('ALTER TABLE edu_stuffs DROP FOREIGN KEY FK_8F1243BB727ACA70');
        $this->addSql('ALTER TABLE edu_stuffs DROP FOREIGN KEY FK_8F1243BBCDF80196');
        $this->addSql('DROP TABLE categories');
        $this->addSql('DROP TABLE courses');
        $this->addSql('DROP TABLE categories_courses');
        $this->addSql('DROP TABLE edu_stuffs');
        $this->addSql('DROP TABLE lessons');
    }
}
