/*
  Warnings:

  - A unique constraint covering the columns `[id_structure]` on the table `structure` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `structure_id_structure_key` ON `structure`(`id_structure`);
