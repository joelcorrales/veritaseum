/*======================================================================*\
  ICBIaW50OiBtYWtlIHRoaXMgYXMgY2xvc2UgdG8gcHJvZHVjdGlvbi1yZWFkeSBzb3VyY2
  UgY29kZSBhcyB5b3UgY2FuIQoKICBCb251cyBwb2ludHMgZm9yIHRlbGxpbmcgdXMgd2hh
  dCB0aGlzIGRvZXMgaW4gcGxhaW4gdGVybXM6CgogICAgJycuam9pbihpdGVydG9vbHMuY2
  hhaW4oKnppcChzWy0yOjotMl0sIHNbOjotMl0pKSk=
\*======================================================================*/

//GENERAL: best practice to use '===' instead of '=='.
//Can't compare to null, first you have to check if it is undefined.
if (typeof (NAMESPACE) === 'undefined' ||
    NAMESPACE === null) {
    NAMESPACE = {};

    // Creates an object that allocates a new or references an
    // existing very expensive resource associated with `id`
    var resource = function (id) {
        // Private data
        //Best practice is to use [] to create a new array.
        var _all_ids = [];
        var _closed = false;
        var _id = id;
        var _expensive_resource = null;

        // Public data
        var persona = {
        };

        // Public methods
        var getExpensiveResource = function () {
            return _expensive_resource;
        }
        
        persona.getExpensiveResource = getExpensiveResource;

        var getId = function () {
            return _id;
        }
        
        persona.getId = getId;

        var close = function () {
            delete _all_ids[_id];
            //Wrong reference to _closed.
            _closed = true;
        }

        persona.close = close;

        //method "getState" added to be able to test the "close" method.
        var getState = function() {
            return _closed;
        }
        
        persona.getState = getState;

        // Private methods
        //Removed unnecessary id parameter.
        function _lookupOrCreateExpensiveResourceById() {
            _expensive_resource = _all_ids[id];
            
            //If the id index is not defined in _all_ids, then it will return an undefined, not null.
            if (_expensive_resource === undefined) {
                // Just pretend for the sake of this example
                _expensive_resource = {
                    value: "I'm a very expensive resource associated with ID " + id
                };

                _all_ids[id] = _expensive_resource;
            }
            
            return _expensive_resource;
        }
        
        // Initialization
        _expensive_resource = _lookupOrCreateExpensiveResourceById();
        
        return persona;
    }

    NAMESPACE.resource = resource;
}