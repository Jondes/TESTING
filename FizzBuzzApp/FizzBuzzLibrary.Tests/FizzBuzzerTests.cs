using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace FizzBuzzLibrary.Tests
{
    [TestFixture]
    public class FizzBuzzerTests
    {
        [Test] 
        public void Buzzer_When1_Returns1()
        {
            //Arrange
            int input = 1;
            //Act
            string output = FizzBuzzer.GetValue(input);

            //Assert
            Assert.AreEqual("1", output);
        }
        
    }
    }
