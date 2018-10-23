using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Net.Http;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc.Rendering;
using AltinnCore.ServiceLibrary;
using AltinnCore.ServiceLibrary.Enums;


namespace AltinnCoreServiceImplementation.ninaOrg.repo1_4
{
    public class ValidationHandler
    {
        public ValidationHandler()
        {

        }

        /// <summary>
        /// Handles validation of the model in a AltinnCore service
        /// 
        /// Inside this method all validations needed for 
        /// </summary>
        /// <param name="model">The service model</param>
        public void Validate(Skjema Skjema, RequestContext requestContext, ModelStateDictionary modelState)
        {

        }
    }

}
