using System.Linq.Expressions;

namespace Core.Specifications
{
    public interface ISpecification<T>
    {
         //Create Generica methods
         Expression<Func<T, bool>> Criteria {get;}
         List<Expression<Func<T, object>>> Includes {get;}
         //For sorting
         Expression<Func<T, object>> OrderBy {get;}
         Expression<Func<T, object>> OrderByDescending {get;}

         //For pagination
         int Take {get;}
         int Skip {get;}
         bool IsPagingEndabled {get;}
    }
}