using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AltinnCore.DataService.Models;
using AltinnCore.DataService.Repository;
using Microsoft.AspNetCore.Mvc;

namespace AltinnCore.DataService.Controllers
{
    /// <summary>
    /// api for managing the form data
    /// </summary>
    [Route("dataservice/instances/{instanceId}/[controller]/")]
    [ApiController]
    public class AttachmentsController : Controller
    {
        private readonly IDataRepository _dataRepository;

        /// <summary>
        /// Initializes a new instance of the <see cref="AttachmentsController"/> class
        /// </summary>
        /// <param name="dataRepository">the form data repository handler</param>
        public AttachmentsController(IDataRepository dataRepository)
        {
            _dataRepository = dataRepository;
        }

        /// <summary>
        /// Save the form data
        /// </summary>
        /// <param name="fileName">the file name for for attachment</param>
        /// <returns>The get response</returns>        
        /// <returns>If the request was successful or not</returns>
        // GET dataserviceapi/instances/{instanceId}/attachments/{fileName}/
        [HttpGet("{fileName}")]
        public async Task<ActionResult> Get(string fileName)
        {
            if (string.IsNullOrEmpty(fileName))
            {
                return BadRequest();
            }

            var result = await _dataRepository.GetDataInStorage(fileName);

            if (result == null)
            {
                return BadRequest();
            }

            return Ok(result);
        }

        /// <summary>
        /// Save the form data
        /// </summary>
        /// <param name="attachment">the attachment data to be stored</param>
        /// <returns>If the request was successful or not</returns>
        // POST dataserviceapi/instances/{instanceid}/attachments/
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Data attachment)
        {
            if (attachment == null || string.IsNullOrEmpty(attachment.FileName) || string.IsNullOrEmpty(attachment.AttachmentData))
            {
                return BadRequest();
            }

            MemoryStream attachmentDataStream = new MemoryStream();

            // var xmlData = JsonConvert.SerializeObject(formData.FormDataXml);
            StreamWriter writer = new StreamWriter(attachmentDataStream);
            writer.Write(attachment.AttachmentData);
            writer.Flush();
            attachmentDataStream.Position = 0;

            var result = await _dataRepository.CreateDataInStorage(attachmentDataStream, attachment.FileName);
            if (!result)
            {
                return BadRequest();
            }

            return Ok(result);
        }
    }
}
