using System;

namespace GroupDirectory.Data.Models
{
  public class User: EntityWithId
  {
    public string Name { get; set; }
    public string Email { get; set; }
    public DateTime CreationDate { get; set; }
  }
}
