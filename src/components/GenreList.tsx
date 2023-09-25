import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY="5px">
            <Skeleton height="50px" borderRadius={5} />
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
