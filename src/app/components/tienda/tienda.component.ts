import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { Articulo } from '../../models/Articulo.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  private articuloFilter: any = {nombre: ''};
  private allArticle: Articulo[];
  private articulos: ArticulosService;
  cantidadAdd;

  constructor(private articles: ArticulosService, private router: Router, private route: ActivatedRoute) {
    this.articulos = articles;
   }

  ngOnInit() {
    this.articulos.getAllArticulo().subscribe(
      artics => this.allArticle = artics
    );
  }

  showMore(articulo: Articulo) {
    this.articulos.setItem(articulo);
    this.router.navigate(['tienda/detalle-producto/:id']);
  }

  addCanasta(articuloSel) {
    if(!isNaN(this.cantidadAdd)) {
      this.articulos.setItem(articuloSel);
      this.articulos.agregarItemShoping(this.cantidadAdd);
    }
  }
}
