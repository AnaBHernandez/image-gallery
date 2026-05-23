# 🛰️ CONTRATO DE INGENIERÍA V3: IMAGE GALLERY (AUDITADO UNIDADES 1-3)

1. Forzar ChangeDetectionStrategy.OnPush en todos los componentes para operar en modo Zoneless nativo.
2. Declarar standalone: true en los metadatos para asegurar el aislamiento completo de los componentes.
3. Consumir los datos de las imágenes mediante la función Signal input.required<Image>() en el Hijo.
4. Implementar la directiva NgOptimizedImage con [ngSrc] y dimensiones fijas para neutralizar el CLS.
5. Declarar el canal de salida asíncrono y tipado deleteImage = output<string>() en el Hijo.
6. Aplicar event.stopPropagation() como primera instrucción en el Hijo para frenar el burbujeo del DOM.
7. Declarar el formulario reactivo imageForm = new FormGroup() con Validators.required en el Padre.
8. Extraer los datos del formulario de forma segura en singular mediante la propiedad imageForm.value.
9. Mutar el estado inmutable añadiendo elementos al inicio de la Signal usando images.update().
10. Escuchar el evento (deleteImage) en gallery.html para filtrar y remover elementos inmutablemente.