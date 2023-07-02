# Pasos para instalar y ejecutar el proyecto creado para el examen

Instalaciones necesarias:
Dentro del directorio del proyecto ejecutar:

```bash
 Ejecuta `npm install` para instalar las dependencias.
```

> > ### Requiere de una base de datos MySQL.

Configura las variables de entorno en el archivo `.env`.

Variables de entorno:

```bash
PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_DIALECT=
SECRET_KEY=clave-secreta-de-desarrollo
```

Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Ejecutar el proyecto en modo producción:

```bash
npm run start
```

![Express + EJS + MySQL](https://www.bing.com/images/search?view=detailV2&ccid=V%2faHPxdu&id=59C1FB62008CBDBAECE00F2839150FCBC2610BFF&thid=OIP.V_aHPxduW8VFMkX33Awb5AHaD_&mediaurl=https%3a%2f%2fwww.restapiexample.com%2fwp-content%2fuploads%2f2017%2f09%2fnodejs-mysql-express.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.57f6873f176e5bc5453245f7dc0c1be4%3frik%3d%252fwthwssPFTkoDw%26pid%3dImgRaw%26r%3d0&exph=328&expw=609&q=mysql+node+js+express&simid=608047093377802044&FORM=IRPRST&ck=C079FB97868787F032428C1F86252982&selectedIndex=0&ajaxhist=0&ajaxserp=0)
