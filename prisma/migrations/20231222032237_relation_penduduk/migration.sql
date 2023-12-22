/*
  Warnings:

  - A unique constraint covering the columns `[nik]` on the table `penduduk` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[penduduk_id]` on the table `penduduk_meninggal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[penduduk_id]` on the table `penduduk_pindah` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `penduduk_id` to the `penduduk_meninggal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `penduduk_id` to the `penduduk_pindah` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `penduduk_meninggal` ADD COLUMN `penduduk_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `penduduk_pindah` ADD COLUMN `penduduk_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `penduduk_nik_key` ON `penduduk`(`nik`);

-- CreateIndex
CREATE UNIQUE INDEX `penduduk_meninggal_penduduk_id_key` ON `penduduk_meninggal`(`penduduk_id`);

-- CreateIndex
CREATE UNIQUE INDEX `penduduk_pindah_penduduk_id_key` ON `penduduk_pindah`(`penduduk_id`);

-- AddForeignKey
ALTER TABLE `penduduk_meninggal` ADD CONSTRAINT `penduduk_meninggal_penduduk_id_fkey` FOREIGN KEY (`penduduk_id`) REFERENCES `penduduk`(`penduduk_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penduduk_pindah` ADD CONSTRAINT `penduduk_pindah_penduduk_id_fkey` FOREIGN KEY (`penduduk_id`) REFERENCES `penduduk`(`penduduk_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
