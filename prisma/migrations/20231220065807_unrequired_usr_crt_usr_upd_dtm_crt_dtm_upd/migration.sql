-- AlterTable
ALTER TABLE `employee` MODIFY `user_crt` VARCHAR(100) NULL,
    MODIFY `user_upd` VARCHAR(100) NULL,
    MODIFY `dtm_crt` DATETIME(3) NULL,
    MODIFY `dtm_upd` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `penduduk` MODIFY `user_crt` VARCHAR(100) NULL,
    MODIFY `user_upd` VARCHAR(100) NULL,
    MODIFY `dtm_crt` DATETIME(3) NULL,
    MODIFY `dtm_upd` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `penduduk_meninggal` MODIFY `user_crt` VARCHAR(100) NULL,
    MODIFY `user_upd` VARCHAR(100) NULL,
    MODIFY `dtm_crt` DATETIME(3) NULL,
    MODIFY `dtm_upd` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `penduduk_pindah` MODIFY `user_crt` VARCHAR(100) NULL,
    MODIFY `user_upd` VARCHAR(100) NULL,
    MODIFY `dtm_crt` DATETIME(3) NULL,
    MODIFY `dtm_upd` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `ref_master` MODIFY `user_crt` VARCHAR(100) NULL,
    MODIFY `user_upd` VARCHAR(100) NULL,
    MODIFY `dtm_crt` DATETIME(3) NULL,
    MODIFY `dtm_upd` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `ref_menu` MODIFY `user_crt` VARCHAR(100) NULL,
    MODIFY `user_upd` VARCHAR(100) NULL,
    MODIFY `dtm_crt` DATETIME(3) NULL,
    MODIFY `dtm_upd` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `ref_role` MODIFY `user_crt` VARCHAR(100) NULL,
    MODIFY `user_upd` VARCHAR(100) NULL,
    MODIFY `dtm_crt` DATETIME(3) NULL,
    MODIFY `dtm_upd` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `user_crt` VARCHAR(100) NULL,
    MODIFY `user_upd` VARCHAR(100) NULL,
    MODIFY `dtm_crt` DATETIME(3) NULL,
    MODIFY `dtm_upd` DATETIME(3) NULL;
