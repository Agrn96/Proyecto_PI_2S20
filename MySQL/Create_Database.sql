-- Crear Base de Datos
CREATE DATABASE proyecto_DB;
use proyecto_DB;

-- Crear Tablas Primerias
CREATE TABLE Usuario(Carnet Int,Nombres VarChar(45),Apellidos VarChar(45),Contrasena VarChar(45),Correo VarChar(45),PRIMARY KEY(Carnet));
CREATE TABLE Curso(CodigoCurso Int,Nombre VarChar(45),PRIMARY KEY(CodigoCurso));
CREATE TABLE Catedratico(NoCatedratico Int,Nombres VarChar(45),Apellidos VarChar(45),PRIMARY KEY(NoCatedratico));

-- Crear Tablas Secundarias
CREATE TABLE Pensum_Sistemas(idCursoPensum Int,Curso_CodigoCurso Int,Creditos Int,Semestre Int, PRIMARY KEY(idCursoPensum),FOREIGN KEY (Curso_CodigoCurso) REFERENCES Curso(CodigoCurso));
CREATE TABLE Cursos_Aprobados(CarnetU Int,CursoP Int,NotaAprobada Int, PRIMARY KEY(CarnetU),FOREIGN KEY (CarnetU) REFERENCES Usuario(Carnet),FOREIGN KEY (CursoP) REFERENCES Pensum_Sistemas(idCursoPensum));
CREATE TABLE Curso_Catedratico(idCatedraticoCurso Int, Curso_CodigoCurso Int,Catedratico_NoCatedratico Int,PRIMARY KEY(idCatedraticoCurso),FOREIGN KEY (Curso_CodigoCurso) REFERENCES Curso(CodigoCurso),FOREIGN KEY (Catedratico_NoCatedratico) REFERENCES Catedratico(NoCatedratico));
CREATE TABLE Publicacion(idPublicacion Int,Mensaje VarChar(100),Usuario_Carnet Int,Fecha Date, Curso_Catedratico_idCatedraticoCurso Int,Curso_CodigoCurso Int, Catedratico_NoCatedratico Int,Tipo Int,PRIMARY KEY(idPublicacion),FOREIGN KEY (Usuario_Carnet) REFERENCES Usuario(Carnet),FOREIGN KEY (Curso_Catedratico_idCatedraticoCurso) REFERENCES Curso_Catedratico(idCatedraticoCurso),FOREIGN KEY (Curso_CodigoCurso) REFERENCES Curso(CodigoCurso),FOREIGN KEY (Catedratico_NoCatedratico) REFERENCES Catedratico(NoCatedratico));
CREATE TABLE Comentario(idComentario Int,Mensaje VarChar(100),Publicacion_idPublicacion Int,Usuario_Carnet Int,PRIMARY KEY(idComentario),FOREIGN KEY (Usuario_Carnet) REFERENCES Usuario(Carnet),FOREIGN KEY (Publicacion_idPublicacion) REFERENCES Publicacion(idPublicacion));
