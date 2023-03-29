"use client";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Tabla from "./Tabla";

type Component = {
  text: string;
  variant: string;
  title: string;
  content: string;
};

const BodyComponent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [showInfo, setShowInfo] = useState({} as Component);
  console.log(showInfo);

  const buttons = [
    {
      text: "boton 1",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 6-01 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "boton 2",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 6-02 periodo 3",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "boton 3",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 6-03 periodo 4",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },

    {
      text: "boton 4",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 7-01 periodo 1",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.tro",
    },
    {
      text: "boton 5",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 7-02 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.co",
    },
    {
      text: "boton 6",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 7-03 periodo 3",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "boton 7",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 7-04 periodo 4",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "boton 8",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 8-01 periodo 1",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "boton 9",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 8-02 periodo 2",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
    {
      text: "boton 10",
      variant: "gradient",
      title: "Pdts. Cierre Grupo 8-03 periodo 3",
      content:
        " Este proceso revisa las planillas de los docentes, buscando registros sin calificar para asignarles una calificación según los parámetros establecidos.",
    },
  ];

  return (
    <>
      <div className="mx-10">
        <Fragment>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              onClick={(e: any) => {
                e.preventDefault();
                setOpen(true);
                setShowInfo({
                  ...button,
                });
              }}
              className={`mt-5 ${index !== buttons.length - 1 ? "mr-5" : ""}`}
            >
              <span>{button.text}</span>
            </Button>
          ))}
          <Dialog
            open={open}
            handler={handleOpen}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>{showInfo?.title || ""}</DialogHeader>
            <DialogBody divider>{showInfo?.content || ""}</DialogBody>
            <Tabla />
            <DialogFooter>
              {[
                // {
                //   text: "Cancel",
                //   variant: "text",
                //   color: "red",
                // },
                {
                  text: "Guardar",
                  variant: "gradient",
                  color: "green",
                },
              ].map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant}
                  color={button.color}
                  onClick={handleOpen}
                  className={index === 0 ? "mr-3" : ""}
                >
                  <span>{button.text}</span>
                </Button>
              ))}
            </DialogFooter>
          </Dialog>
        </Fragment>
      </div>
    </>
  );
};

export default BodyComponent;