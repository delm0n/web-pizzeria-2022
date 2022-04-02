import { Component, OnInit } from '@angular/core';
import axios from 'axios';
//import { ModalPizzaService } from '../../../modal-pizza.service';
import { ModalPizzaService } from '../../../myservices/modal-pizza/modal-pizza.service';
import { IngredientClass } from 'src/app/models/IngredientClass';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  ingreds: IngredientClass[] = [];
  boolArrayView: boolean[] = []; //выделение выбранных допов - массив true/false

  constructor(private pizzaService: ModalPizzaService) { }

  addIngred(id: number, index: number) {

    //по клику добавляем/убираем доп
    this.pizzaService.boolArrayServ[index] = !this.pizzaService.boolArrayServ[index]

    //регулирем итоговую цену за доп. ингредиенты
    if(this.pizzaService.boolArrayServ[index]) {
      this.pizzaService.plusPrice(this.ingreds[index].Price);
    }
    else {
      this.pizzaService.minusPrice(this.ingreds[index].Price);
    }   
  }

  ngOnInit(): void {
    axios.get('http://localhost:1234/ingredients')
      .then((res) => {
      
      this.pizzaService.ingredientArray = JSON.parse(res.headers['ingredients']);
      this.pizzaService.setBoolFalseStartup();

      //заполняем представления
      this.boolArrayView = this.pizzaService.boolArrayServ;
      this.ingreds = this.pizzaService.ingredientArray;
      
           
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
}
