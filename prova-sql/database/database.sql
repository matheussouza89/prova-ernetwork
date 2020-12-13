create database PROVA_MATHEUS;

use PROVA_MATHEUS;

create table cidades(
	id INT NOT NULL AUTO_INCREMENT primary key,
    codigo_cidade VARCHAR(255),
    nome_cidade VARCHAR(255),
    uf VARCHAR(5)
) ENGINE = innodb;

create table clientes(
	id INT NOT NULL AUTO_INCREMENT primary key,
    codigo VARCHAR(255),
    nome VARCHAR(255),
    sexo CHAR(2),
    rg VARCHAR(50),
    cpf VARCHAR(15),
    dt_nascimento VARCHAR(20),
    salario double,
    cidade INT,
	foreign key (cidade) references cidades(id)
) ENGINE = innodb;

INSERT INTO cidades (codigo_cidade,nome_cidade,uf) 
VALUES ("12-SP","Franca","SP"),
    ("14-SP","Ribeirão Preto","SP"),
    ("35-SP","Ribeirão Corrente","SP");

INSERT INTO clientes (nome,codigo,sexo,rg,cpf,dt_nascimento,salario,cidade)
VALUES (nome:"Matheus de Oliveira e Souza",codigo:"1",sexo:"M",rg:"99.999.999X",cpf:"999.999.999-99",dt_nascimento:"06/12/2001",salario:500.00,cidade:1),
    (nome:"Guilherme Araujo de Oliveira",codigo:"2",sexo:"M",rg:"88.888.888Y",cpf:"888.888.888-88",dt_nascimento:"26/03/2003",salario:800.00,cidade:2),
    (nome:"Fausto Silva",codigo:"3",sexo:"M",rg:"77.777.777Z",cpf:"777.777.777-77",dt_nascimento:"13/11/1968",salario:1000.00,cidade:1),
    (nome:"Ana Furtado",codigo:"4",sexo:"F",rg:"66.666.666A",cpf:"666.666.666-66",dt_nascimento:"08/06/1974",salario:1500.00,cidade:3),
    (nome:"Gerônima Lima",codigo:"5",sexo:"F",rg:"55.555.555B",cpf:"555.555.555-55",dt_nascimento:"01/07/1945",salario:300.00,cidade:1),
    (nome:"Tadeu Schmidt",codigo:"6",sexo:"M",rg:"44.444.444C",cpf:"444.444.444-44",dt_nascimento:"19/02/1956",salario:5700.00,cidade:2),
    (nome:"Daniel Ribeiro Hielgmann",codigo:"7",sexo:"M",rg:"33.333.333D",cpf:"333.333.333-33",dt_nascimento:"14/09/2007",salario:9000.00,cidade:2);

--1 Trazer todos os registros de CIDADE e CLIENTE (2 QUERY)--
SELECT * FROM cidades;
SELECT * FROM clientes;
--2 Trazer apenas o primeiro registro de CIDADE e CLIENTE--
SELECT * FROM cidades order by id limit 1;
SELECT * FROM clientes order by id limit 1;
--3 Trazer todos os CLIENTES que comecem com a letra A--
SELECT * FROM clientes where nome like 'A%';
--4 Trazer todos os CLIENTES que terminem com SILVA--
select * from clientes where nome like '%Silva';
--5 Qual o maior salário do CLIENTE--
select max(salario) from clientes;
--6 A média de salário agrupado por SEXO--
select avg(salario) from clientes group by sexo;
--7 O maior salário agrupado pela CIDADE--
select max(salario) from clientes group by cidade;
--8 Trazer todos os CLIENTES exibindo seus dados e de sua CIDADE--
select clientes .*,cidades.nome_cidade from clientes 
inner join cidades on clientes.cidade = cidades.id;