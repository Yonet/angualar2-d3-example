angular.module('app')
	.directive('barGraph', function(){
		return {
			scope: {
				data: '=graphData'
			},
			link: function(scope, element, attrs) {

				//Appends the graph to lineGraph directive
				var graph = d3.select(element[0]);

				var divs = graph.append("div").attr("class", "chart")
					.selectAll('div');

				scope.$watch('data',function(data){
					console.log('data',data);
					if(!data) return;

					divs.data(data).enter().append('div')
						.transition().ease("elastic")
         				.style("width", function(d) { return d + "%"; })
         				.text(function(d) { return d + "%"; });
         				
				}, true);

			}
			
		}
	})