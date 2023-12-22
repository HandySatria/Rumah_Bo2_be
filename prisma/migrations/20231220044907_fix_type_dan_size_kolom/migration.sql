/*
  Warnings:

  - You are about to alter the column `no_kk` on the `penduduk` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to alter the column `nik` on the `penduduk` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to alter the column `jenis_kelamin` on the `penduduk` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - You are about to alter the column `tanggal_terbit_kk` on the `penduduk` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `DateTime(3)`.
  - Made the column `tanggal_pindah` on table `penduduk` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_crt` on table `penduduk_meninggal` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_upd` on table `penduduk_meninggal` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `employee_name` VARCHAR(150) NOT NULL,
    MODIFY `jabatan` VARCHAR(150) NOT NULL,
    MODIFY `posisi` VARCHAR(150) NULL;

-- AlterTable
ALTER TABLE `penduduk` MODIFY `no_kk` VARCHAR(30) NULL,
    MODIFY `nama` VARCHAR(150) NOT NULL,
    MODIFY `nik` VARCHAR(30) NOT NULL,
    MODIFY `jenis_kelamin` VARCHAR(30) NULL,
    MODIFY `nama_ayah` VARCHAR(150) NULL,
    MODIFY `nama_ibu` VARCHAR(150) NULL,
    MODIFY `tanggal_terbit_kk` DATETIME(3) NULL,
    MODIFY `tanggal_pindah` DATETIME(3) NOT NULL,
    MODIFY `alamat_asal` VARCHAR(200) NULL;

-- AlterTable
ALTER TABLE `penduduk_meninggal` MODIFY `penyebab_meninggal` VARCHAR(150) NULL,
    MODIFY `user_crt` VARCHAR(100) NOT NULL,
    MODIFY `user_upd` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `penduduk_pindah` MODIFY `penyebab_pindah` VARCHAR(150) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `full_name` VARCHAR(150) NOT NULL,
    MODIFY `token` VARCHAR(150) NULL;
