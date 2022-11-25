-- CreateTable
CREATE TABLE `estrutura` (
    `id_estrutura` VARCHAR(150) NOT NULL,
    `nome` VARCHAR(150) NULL,
    `descricao` VARCHAR(150) NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id_estrutura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
