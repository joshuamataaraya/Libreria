-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mnemonic
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mnemonic
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mnemonic` DEFAULT CHARACTER SET utf8 ;
USE `mnemonic` ;

-- -----------------------------------------------------
-- Table `mnemonic`.`administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mnemonic`.`administradores` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '',
  `username` VARCHAR(45) NOT NULL COMMENT '',
  `password` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mnemonic`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mnemonic`.`clientes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '',
  `nombre` VARCHAR(45) NOT NULL COMMENT '',
  `password` VARCHAR(45) NOT NULL COMMENT '',
  `correo` VARCHAR(45) NOT NULL COMMENT '',
  `esFrecuente` TINYINT(1) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mnemonic`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mnemonic`.`productos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '',
  `nombre` VARCHAR(45) NOT NULL COMMENT '',
  `descripcion` VARCHAR(45) NOT NULL COMMENT '',
  `imagen` VARCHAR(100) NULL DEFAULT NULL COMMENT '',
  `esOferta` INT(11) NOT NULL COMMENT '',
  `precio` INT(11) NOT NULL COMMENT '',
  `precioOferta` INT(11) NULL DEFAULT NULL COMMENT '',
  `cantidad` INT(11) NOT NULL COMMENT '',
  `categoria` VARCHAR(45) NOT NULL COMMENT '',
  `subCategoria` VARCHAR(45) NOT NULL COMMENT '',
  `inventario` TINYINT(1) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mnemonic`.`compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mnemonic`.`compras` (
  `id` INT(11) NOT NULL COMMENT '',
  `Productos_id` INT(11) NOT NULL COMMENT '',
  `Clientes_Id` INT(11) NOT NULL COMMENT '',
  `cantidad` INT(11) NOT NULL COMMENT '',
  `fecha` DATE NULL DEFAULT NULL COMMENT '',
  PRIMARY KEY (`id`, `Productos_id`, `Clientes_Id`)  COMMENT '',
  INDEX `fk_Productos_has_Clientes_Clientes2_idx` (`Clientes_Id` ASC)  COMMENT '',
  INDEX `fk_Productos_has_Clientes_Productos1_idx` (`Productos_id` ASC)  COMMENT '',
  CONSTRAINT `fk_Productos_has_Clientes_Clientes2`
    FOREIGN KEY (`Clientes_Id`)
    REFERENCES `mnemonic`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Productos_has_Clientes_Productos1`
    FOREIGN KEY (`Productos_id`)
    REFERENCES `mnemonic`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mnemonic`.`configuraciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mnemonic`.`configuraciones` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '',
  `porcentajeDescuento` FLOAT NULL DEFAULT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '')
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mnemonic`.`detallecompra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mnemonic`.`detallecompra` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '',
  `cantidad` INT(11) NOT NULL COMMENT '',
  `idProducto` INT(11) NOT NULL COMMENT '',
  PRIMARY KEY (`id`, `idProducto`)  COMMENT '',
  INDEX `fk_DetalleCompra_Productos1_idx` (`idProducto` ASC)  COMMENT '',
  CONSTRAINT `fk_DetalleCompra_Productos1`
    FOREIGN KEY (`idProducto`)
    REFERENCES `mnemonic`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mnemonic`.`resenas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mnemonic`.`resenas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '',
  `idProducto` INT(11) NOT NULL COMMENT '',
  `idCliente` INT(11) NOT NULL COMMENT '',
  `descripcion` VARCHAR(45) NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '',
  INDEX `fk_Productos_has_Clientes_Clientes1_idx` (`idCliente` ASC)  COMMENT '',
  INDEX `fk_Productos_has_Clientes_Productos_idx` (`idProducto` ASC)  COMMENT '',
  CONSTRAINT `fk_Productos_has_Clientes_Clientes1`
    FOREIGN KEY (`idCliente`)
    REFERENCES `mnemonic`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Productos_has_Clientes_Productos`
    FOREIGN KEY (`idProducto`)
    REFERENCES `mnemonic`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
