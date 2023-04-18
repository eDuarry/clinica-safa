import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  public especialidades: string[] = ['Cardiología', 'Dermatología', 'Neurología'];
  public fecha: string = '';
  public especialidadSeleccionada: string = '';
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  public async solicitarCita() {
    if (this.fecha && this.especialidadSeleccionada) {
      const alert = await this.alertController.create({
        header: 'Cita solicitada',
        message: `Has solicitado una cita de ${this.especialidadSeleccionada} para el día ${this.fecha}.`,
        buttons: ['Aceptar']
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, selecciona una fecha y una especialidad.',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }
}
