/*
  Warnings:

  - You are about to drop the `estrutura` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `estrutura`;

-- CreateTable
CREATE TABLE `structure` (
    `id_structure` VARCHAR(150) NOT NULL,
    `name` VARCHAR(150) NULL,
    `description` VARCHAR(150) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id_structure`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag` (
    `id_tag` VARCHAR(150) NOT NULL,
    `epc` VARCHAR(200) NOT NULL,
    `serial_number` VARCHAR(200) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `localization` VARCHAR(200) NOT NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `structureId_structure` VARCHAR(150) NULL,

    PRIMARY KEY (`id_tag`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id_user` VARCHAR(150) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(200) NOT NULL,
    `pass` VARCHAR(50) NOT NULL,
    `manager` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tag` ADD CONSTRAINT `tag_structureId_structure_fkey` FOREIGN KEY (`structureId_structure`) REFERENCES `structure`(`id_structure`) ON DELETE SET NULL ON UPDATE CASCADE;
