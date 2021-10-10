using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            public Handler(DataContext context)
            {
                Context = context;
            }

            public DataContext Context { get; }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await Context.Activities.FindAsync(request.Id);

                Context.Remove(activity);

                await Context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}