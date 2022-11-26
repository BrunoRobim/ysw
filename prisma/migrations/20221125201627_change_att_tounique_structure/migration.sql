/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `structure` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `structure_id_structure_key` ON `structure`;

-- CreateIndex
CREATE UNIQUE INDEX `structure_name_key` ON `structure`(`name`);
