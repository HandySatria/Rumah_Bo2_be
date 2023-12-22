/*
  Warnings:

  - You are about to alter the column `nik` on the `penduduk_meninggal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to alter the column `nik` on the `penduduk_pindah` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE `penduduk_meninggal` MODIFY `nik` VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE `penduduk_pindah` MODIFY `nik` VARCHAR(30) NOT NULL;
