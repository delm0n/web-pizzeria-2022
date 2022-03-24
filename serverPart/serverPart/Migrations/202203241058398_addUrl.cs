﻿namespace serverPart.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addUrl : DbMigration
    {
        public override void Up()
        {
            AddColumn("public.Ingredients", "UrlImg", c => c.String());
            AddColumn("public.Pizzas", "Structure", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("public.Pizzas", "Structure");
            DropColumn("public.Ingredients", "UrlImg");
        }
    }
}
