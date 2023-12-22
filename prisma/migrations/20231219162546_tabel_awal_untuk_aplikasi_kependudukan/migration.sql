-- CreateTable
CREATE TABLE `ref_master` (
    `ref_master_id` INTEGER NOT NULL AUTO_INCREMENT,
    `master_type` VARCHAR(100) NOT NULL,
    `master_key` VARCHAR(100) NOT NULL,
    `master_value` VARCHAR(100) NOT NULL,
    `user_crt` VARCHAR(100) NOT NULL,
    `user_upd` VARCHAR(100) NOT NULL,
    `dtm_crt` DATETIME(3) NOT NULL,
    `dtm_upd` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ref_master_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employee` (
    `employee_id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_name` VARCHAR(100) NOT NULL,
    `jabatan` VARCHAR(100) NOT NULL,
    `posisi` VARCHAR(100) NULL,
    `user_crt` VARCHAR(100) NOT NULL,
    `user_upd` VARCHAR(100) NOT NULL,
    `dtm_crt` DATETIME(3) NOT NULL,
    `dtm_upd` DATETIME(3) NOT NULL,

    PRIMARY KEY (`employee_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ref_role` (
    `ref_role_id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_code` VARCHAR(100) NOT NULL,
    `menu_code` VARCHAR(100) NOT NULL,
    `user_crt` VARCHAR(100) NOT NULL,
    `user_upd` VARCHAR(100) NOT NULL,
    `dtm_crt` DATETIME(3) NOT NULL,
    `dtm_upd` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ref_role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ref_menu` (
    `ref_menu_id` INTEGER NOT NULL AUTO_INCREMENT,
    `menu_code` VARCHAR(100) NOT NULL,
    `menu_name` VARCHAR(100) NOT NULL,
    `is_active` BOOLEAN NOT NULL,
    `user_crt` VARCHAR(100) NOT NULL,
    `user_upd` VARCHAR(100) NOT NULL,
    `dtm_crt` DATETIME(3) NOT NULL,
    `dtm_upd` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ref_menu_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penduduk` (
    `penduduk_id` INTEGER NOT NULL AUTO_INCREMENT,
    `no_kk` VARCHAR(100) NULL,
    `nama` VARCHAR(100) NOT NULL,
    `nik` VARCHAR(100) NOT NULL,
    `dusun` VARCHAR(100) NULL,
    `rw` INTEGER NULL,
    `rt` INTEGER NULL,
    `jenis_kelamin` VARCHAR(100) NULL,
    `tempat_lahir` VARCHAR(100) NULL,
    `tanggal_lahir` DATETIME(3) NULL,
    `agama` VARCHAR(100) NULL,
    `pendidikan` VARCHAR(100) NULL,
    `pekerjaan` VARCHAR(100) NULL,
    `golongan_darah` VARCHAR(10) NULL,
    `status_perkawinan` VARCHAR(100) NULL,
    `hubungan_keluarga` VARCHAR(100) NULL,
    `kewarganegaraan` VARCHAR(100) NULL,
    `no_paspor` VARCHAR(100) NULL,
    `no_kitas` VARCHAR(100) NULL,
    `nama_ayah` VARCHAR(100) NULL,
    `nama_ibu` VARCHAR(100) NULL,
    `status` VARCHAR(100) NULL,
    `tanggal_terbit_kk` VARCHAR(100) NULL,
    `mutasi_code` VARCHAR(100) NULL,
    `tanggal_pindah` VARCHAR(100) NULL,
    `alamat_asal` VARCHAR(100) NULL,
    `alasan_pindah` VARCHAR(150) NULL,
    `is_penduduk` BOOLEAN NULL,
    `is_penduduk_meninggal` BOOLEAN NULL,
    `is_penduduk_pindah` BOOLEAN NULL,
    `user_crt` VARCHAR(100) NOT NULL,
    `user_upd` VARCHAR(100) NOT NULL,
    `dtm_crt` DATETIME(3) NOT NULL,
    `dtm_upd` DATETIME(3) NOT NULL,

    PRIMARY KEY (`penduduk_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penduduk_meninggal` (
    `penduduk_meninggal_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` VARCHAR(100) NOT NULL,
    `tanggal_meninggal` DATETIME(3) NULL,
    `umur_meninggal` INTEGER NULL,
    `penyebab_meninggal` VARCHAR(100) NULL,
    `user_crt` VARCHAR(100) NULL,
    `user_upd` VARCHAR(100) NULL,
    `dtm_crt` DATETIME(3) NOT NULL,
    `dtm_upd` DATETIME(3) NOT NULL,

    PRIMARY KEY (`penduduk_meninggal_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penduduk_pindah` (
    `penduduk_pindah_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` VARCHAR(100) NOT NULL,
    `tanggal_pindah` DATETIME(3) NULL,
    `alamat_pindah` VARCHAR(200) NULL,
    `penyebab_pindah` VARCHAR(100) NULL,
    `user_crt` VARCHAR(100) NOT NULL,
    `user_upd` VARCHAR(100) NOT NULL,
    `dtm_crt` DATETIME(3) NOT NULL,
    `dtm_upd` DATETIME(3) NOT NULL,

    PRIMARY KEY (`penduduk_pindah_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
