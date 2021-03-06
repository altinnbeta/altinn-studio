using AltinnCore.ServiceLibrary.Enums;
using AltinnCore.ServiceLibrary.Workflow;

namespace AltinnCore.Common.Services.Interfaces
{
    /// <summary>
    /// Interface for the workflow service
    /// </summary>
    public interface IWorkflowSI
    {
        /// <summary>
        /// This method initializes the service and saves the initial status to disk
        /// </summary>
        /// <param name="formId">The formId</param>
        /// <param name="owner">The owner of the service owner</param>
        /// <param name="service">The service code for the current service</param>
        /// <param name="partyId">The partyId</param>
        /// <returns>The current service state</returns>
        ServiceState InitializeService(int formId, string owner, string service, int partyId);

        /// <summary>
        /// This method returns the correct url given the current state
        /// </summary>
        /// <param name="formId">The formId</param>
        /// <param name="owner">The owner of the service owner</param>
        /// <param name="service">The service code for the current service</param>
        /// <param name="currentState">The current state of the form</param>
        /// <returns>The url to redirect the user to</returns>
        string GetUrlForCurrentState(int formId, string owner, string service, WorkflowStep currentState);

        /// <summary>
        /// This method moves the service forward in the workflow by updating the state
        /// </summary>
        /// <param name="formId">The formId</param>
        /// <param name="owner">The owner of the service owner</param>
        /// <param name="service">The service code for the current service</param>
        /// <param name="partyId">The partyId</param>
        /// <returns>The new current service state</returns>
        ServiceState MoveServiceForwardInWorkflow(int formId, string owner, string service, int partyId);

        /// <summary>
        /// This method figures out the current state of a service instance
        /// </summary>
        /// <param name="formId">The formId</param>
        /// <param name="owner">The owner of the service owner</param>
        /// <param name="service">The service code for the current service</param>
        /// <param name="partyId">The partyId</param>
        /// <returns>The current service state</returns>
        ServiceState GetCurrentState(int formId, string owner, string service, int partyId);
    }
}
