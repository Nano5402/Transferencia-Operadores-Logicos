// Le pedimos al usuario la nota final
let nota = parseInt(prompt("¿Cuál fue su nota final?"))

// Le pedimos el porcentaje de asistencia
let asistencia = parseInt(prompt("¿Cuál fue su porcentaje de asistencia?"))

// Verificamos si cumple ambas condiciones para aprobar
if (nota >= 60 && asistencia >= 80) {
  console.log("Paso la materia.")
  alert("Paso la materia.")
} else {
  console.log("Perdió la materia.")
  alert("Perdió la materia.")
}

// Pregunta de análisis: ¿Qué operador lógico garantiza que ambas condiciones se  evalúen al mismo tiempo? && porque utilizando esta ambas tienen que ser true para que el resultado me de true
