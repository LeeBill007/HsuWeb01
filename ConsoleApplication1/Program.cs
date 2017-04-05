using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(1);
        }
    }

    [Test("lance")]
    class Person
    {
        public string Name { get; set; }

        public Person()
        {

        }
    }
}
