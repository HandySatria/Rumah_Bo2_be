/*
  Warnings:

  - Added the required column `nik` to the `employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employee` ADD COLUMN `nik` VARCHAR(30) NOT NULL;
