# Ray marching
Попробовать: https://mdpakhmurin.github.io/RayMarching_2D/

Ray marching - Один из способов нахождения пересечения луча и объекта. Каждый шаг ищется расстояние от начальной точки до ближайшего объекта с помощью полей расстояния со знаком (SDF - https://en.wikipedia.org/wiki/Signed_distance_function), после чего откладывается новая точка на это расстояние вдоль выбранного направления.

Формулы для полей расстояния: https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
