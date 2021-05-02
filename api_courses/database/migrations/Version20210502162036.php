<?php

namespace Database\Migrations;

use Doctrine\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema as Schema;

class Version20210502162036 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema): void
    {
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE lesson_blocks ADD key_id VARCHAR(36) DEFAULT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_BD7B652FD145533 ON lesson_blocks (key_id)');
        $this->addSql('CREATE INDEX keyid ON lesson_blocks (key_id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema): void
    {
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_BD7B652FD145533 ON lesson_blocks');
        $this->addSql('DROP INDEX keyid ON lesson_blocks');
        $this->addSql('ALTER TABLE lesson_blocks DROP key_id');
    }
}
