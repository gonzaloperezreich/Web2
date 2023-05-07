import re
import filetype


def validar_nombre(value):
  return value and len(value) > 4

def validate_email(value):
  return "@" in value

def validate_cantidad(value):
    if int(value) <=0:
        return False
    else:
        return True
    
def validate_conf_img(conf_img):
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}

    # check if a file was submitted
    if conf_img is None:
        return False

    # check if the browser submitted an empty file
    if conf_img.filename == "":
        return False
    
    # check file extension
    ftype_guess = filetype.guess(conf_img)
    if ftype_guess.extension not in ALLOWED_EXTENSIONS:
        return False
    # check mimetype
    if ftype_guess.mime not in ALLOWED_MIMETYPES:
        return False
    return True


def donacion_isvalid(nombre,celular, email,region,comuna,calle_numero,tipo,cantidad,fecha_disponibilidad,descripcion,condiciones, imagen):
    return validar_nombre(nombre) and validate_email(email) and validate_conf_img(imagen) and validate_cantidad(cantidad)



def solicitud_isvalid(nombre, email,celular,region,comuna, tipo,cantidad,descripcion):
    return validar_nombre(nombre) and validate_email(email) and validate_cantidad(cantidad)
    