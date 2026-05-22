# Borrador de contenido — Experiencia y proyectos

> Borrador en español. La versión en inglés se deriva de esta cuando montemos la
> sección bilingüe. Pendiente de completar: fechas/periodos, título de rol exacto
> en cada uno e impacto medible donde se pueda.

---

## 1. Viajes El Corte Inglés — UST

**Rol:** Senior Backend Developer
**Periodo:** _(pendiente)_ — ~1 año, actualidad

Lideré desde cero el desarrollo backend de una plataforma de cálculo de
incentivos de ventas para los agentes de Viajes El Corte Inglés en España
(`Incentivos.Management.Api`, `Incentivos.Intranet.Api`). Diseñé la evolución de
un sistema mono-mercado a una arquitectura multi-mercado, con `MarketCode` como
concepto de dominio de primer nivel y estrategias de mercado intercambiables.
Construí el motor de cálculo, endpoints con filtrado/ordenación, importación
masiva vía Excel, enmascarado de campos por rol, y optimización de consultas
MongoDB con índices patrón ESR.

**Stack:** C# / .NET 8, MongoDB, Hangfire, microservicios.

**Impacto:** _(pendiente — p. ej. nº de agentes, volumen de cálculos, mejora de
rendimiento o de tiempos de proceso)_

---

## 2. Trade Promotion Optimization (TPO) — Deloitte UK

**Rol:** Backend Developer
**Periodo:** _(pendiente)_

Proyecto interno de Deloitte UK para optimización de promociones en retail.
A partir de una serie de parámetros y un componente de Machine Learning en
Python, el sistema determinaba la combinación óptima de producto, temporada y
modalidad de oferta (2x1, 3x2, BOGO, etc.) para maximizar el rendimiento de las
promociones de grandes superficies. Trabajé en el backend, montado sobre un
flujo de Azure Functions encadenadas dividido en 5 fases.

**Contexto:** equipo internacional distribuido (Reino Unido, Irlanda, Escocia,
India y España), trabajo íntegramente en inglés, metodología Scrum.

**Stack:** C# / .NET, Azure Functions, integración con modelos ML en Python.

**Impacto:** _(pendiente)_

---

## 3. OTT de streaming deportivo — Grupo Solutio (cliente LaLigaTech / Sportian)

**Rol:** Backend Developer
**Periodo:** _(pendiente)_

Plataforma OTT de streaming deportivo construida sobre arquitectura de
microservicios, con Azure Service Bus como hilo conductor entre servicios.
Mi primer servicio fue el encargado de gestionar la cola de Service Bus, y desde
ahí trabajé de forma multidisciplinar tocando el servicio de CMS, el módulo de
Suscripciones (dos servicios) y el servicio de persistencia de las entidades
principales en base de datos.

**Contexto:** equipo grande (~15 desarrolladores backend), APIs modulares.

**Stack:** C# / .NET 6 con posterior migración a .NET 8, SQL Server (relacional),
Cosmos DB (documentos), Redis (caché de configuración).

**Impacto:** _(pendiente)_
