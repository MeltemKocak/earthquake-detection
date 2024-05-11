-- CreateTable
CREATE TABLE `deprem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `enlem` VARCHAR(255) NOT NULL,
    `boylam` VARCHAR(255) NOT NULL,
    `derinlik` VARCHAR(255) NOT NULL,
    `tip` VARCHAR(255) NOT NULL,
    `buyukluk` VARCHAR(255) NOT NULL,
    `il` VARCHAR(255) NOT NULL,
    `tarih` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
