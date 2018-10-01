using System;

namespace GroupDirectory.Data.Models
{
  public abstract class EntityWithId
  {
    public Guid Id { get; set; }
  }
}
