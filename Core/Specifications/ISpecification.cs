using System.Linq.Expressions;

namespace Core.Specifications
{
    public interface ISpecification<T>
    {
         //Create Generica methods
         Expression<Func<T, bool>> Criteria {get;}
         List<Expression<Func<T, object>>> Includes {get;}
    }
}