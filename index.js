// Helper function to check if a property exists in an object
function hasProperty(obj, propertyName) {
    if (typeof obj !== 'object' || obj === null || typeof propertyName !== 'string') {
      throw new Error("Invalid inputs. Object must be a valid object, and propertyName must be a string");
    }
  
    return obj.hasOwnProperty(propertyName);
  }
  
  // Helper function to merge two objects
  function mergeObjects(obj1, obj2) {
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
      throw new Error("Both inputs must be valid objects");
    }
  
    return { ...obj1, ...obj2 };
  }
  
  // Demo using the helper functions
  try {
    const person = { name: 'Maulana', age: 27, city: 'Jakarta' };
    const hasAgeProperty = hasProperty(person, 'age');
    console.log("Does the object have 'age' property?", hasAgeProperty);
  
    const additionalInfo = { occupation: 'Engineer', hobby: 'Reading' };
    const mergedObject = mergeObjects(person, additionalInfo);
    console.log("Merged Object:", mergedObject);
  } catch (error) {
    console.error("Error:", error.message);
  }
  
