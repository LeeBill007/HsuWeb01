using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            var p = new Person();
            Console.WriteLine(p.Name);
            Console.ReadLine();
        }
    }

    [Test("lance")]
    class Person
    {
        public string Name { get; set; }
        public Person()
        {
            var oType = typeof(Person);
            var attrs = oType.GetCustomAttributes() ;
            attrs.ToList().ForEach(prop =>
            {
                this.Name = (prop as TestAttribute).Name;
            });

            Action<string> a = (x) =>
            {
                Console.WriteLine(x);
            };
            a("hello");
        }
    }
}
