FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 4001

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["Cars/Cars.csproj", "Cars/"]
RUN dotnet restore "Cars/Cars.csproj"
COPY . .
WORKDIR "/src/Cars"
RUN dotnet build "Cars.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Cars.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Cars.dll"]