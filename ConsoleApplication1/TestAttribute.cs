using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    public class TestAttribute:Attribute
    {
        public  TestAttribute(string name)
        {
            this.Name = name;
        }
        public string Name { get; set; }


    }
}
