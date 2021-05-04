<?php

namespace Database\Migrations;

use Doctrine\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema as Schema;

class Version20210501193834 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema): void
    {
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE edu_stuffs DROP FOREIGN KEY FK_8F1243BB727ACA70');
        $this->addSql('CREATE TABLE lesson_blocks (id INT AUTO_INCREMENT NOT NULL, parent_id INT DEFAULT NULL, lesson_id INT NOT NULL, content LONGTEXT NOT NULL, type INT NOT NULL, deleted_at INT DEFAULT NULL, INDEX IDX_BD7B652FCDF80196 (lesson_id), INDEX IDX_BD7B652F727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE lesson_blocks ADD CONSTRAINT FK_BD7B652FCDF80196 FOREIGN KEY (lesson_id) REFERENCES lessons (id)');
        $this->addSql('ALTER TABLE lesson_blocks ADD CONSTRAINT FK_BD7B652F727ACA70 FOREIGN KEY (parent_id) REFERENCES lesson_blocks (id)');
        $this->addSql('DROP TABLE edu_stuffs');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema): void
    {
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE lesson_blocks DROP FOREIGN KEY FK_BD7B652F727ACA70');
        $this->addSql('CREATE TABLE edu_stuffs (id INT AUTO_INCREMENT NOT NULL, parent_id INT NOT NULL, lesson_id INT NOT NULL, content LONGTEXT CHARACTER SET utf8 NOT NULL COLLATE `utf8_unicode_ci`, type INT NOT NULL, deleted_at INT DEFAULT NULL, INDEX IDX_8F1243BB727ACA70 (parent_id), INDEX IDX_8F1243BBCDF80196 (lesson_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE edu_stuffs ADD CONSTRAINT FK_8F1243BB727ACA70 FOREIGN KEY (parent_id) REFERENCES edu_stuffs (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE edu_stuffs ADD CONSTRAINT FK_8F1243BBCDF80196 FOREIGN KEY (lesson_id) REFERENCES lessons (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('DROP TABLE lesson_blocks');
    }
}
