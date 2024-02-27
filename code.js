/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  while (datosPersona.nombre === null || datosPersona.nombre.trim() === "") {
    datosPersona.nombre = prompt("Ingresa tu nombre:");
    if (datosPersona.nombre === null || datosPersona.nombre.trim() === "") {
      alert("Por favor, ingresa tu nombre.");
    }
  }

  let anioUsuario;
  while (!datosPersona.edad) {
    anioUsuario = parseInt(prompt("Ingresa el año en que naciste:"));
    if (!isNaN(anioUsuario)) {
      let anioActual = new Date().getFullYear();
      datosPersona.edad = anioActual - anioUsuario;
    } else {
      alert("Por favor, ingresa el año en que naciste como un número.");
    }
  }

  while (datosPersona.ciudad === null || datosPersona.ciudad.trim() === "") {
    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives:");
    if (datosPersona.ciudad === null || datosPersona.ciudad.trim() === "") {
      alert("Por favor, ingresa la ciudad donde vives.");
    }
  }

  datosPersona.interesPorJs = confirm("¿Te interesa Javascript?") ? "Si" : "No";
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").textContent = datosPersona.nombre;
  document.getElementById("edad").textContent = datosPersona.edad;
  document.getElementById("ciudad").textContent = datosPersona.ciudad;
  document.getElementById("javascript").textContent = datosPersona.interesPorJs;

  datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
  };
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.getElementById("fila");

  if (fila.children.length === 0) {
    listado.forEach((materia) => {
      const tarjeta = document.createElement("div");

      tarjeta.classList.add("caja");
      tarjeta.innerHTML = `
      <img src="${materia.imgUrl}" alt="${materia.lenguajes}" />
      <div class="card-body">
        <p class="lenguajes">${materia.lenguajes}</p>
        <p class="bimestre">${materia.bimestre}</p>
      </div>
    `;
      fila.appendChild(tarjeta);
    });
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.getElementById("sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", function (event) {
  if (event.key === "f" || event.key === "F") {
    const sobreMi = document.getElementById("sobre-mi");
    sobreMi.classList.remove("oculto");
  }
});
