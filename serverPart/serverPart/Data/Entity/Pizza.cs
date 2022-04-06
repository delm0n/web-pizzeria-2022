﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Reflection;
using System.Threading.Tasks;


namespace serverPart.Data.Entity
{
    public class Pizza
    {
        public int PizzaId { get; set; }

        public string UrlImg { get; set; }

        public string PizzaName { get; set; }
        
        //состав
        public string Structure { get; set; }

        public decimal MinPrice { get; set;}

        public double Rating { get; set; } = 5;

        public ICollection<PizzaSize> PizzaSizes { get; set; }
        
    }
}
