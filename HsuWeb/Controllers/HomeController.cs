using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HsuWeb.Model;

namespace HsuWeb.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Artical()
        {
            //using (ArticalDataEntities1 sq = new ArticalDataEntities1())
            //{
            //    var data = from p in sq.Artical
            //               select p; 
            //}

            return View();
        }
        public JsonResult Artical_pre()
        {
            var data = new List<Artical>();
            using (ArticalDataEntities1 sq = new ArticalDataEntities1())
            {
                data = (from p in sq.Artical
                        select p).ToList();
            };
            return Json(data);
        }

        public ActionResult Artical_post(Artical Art_edit)
        {
            //using (ArticalDataEntities1 sq = new ArticalDataEntities1())
            //{
            //    var data = from p in sq.Artical
            //               select p; 
            //}

            return View();
        }
    }
}